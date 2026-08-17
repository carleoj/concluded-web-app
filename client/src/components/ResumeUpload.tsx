import { useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

interface ResumeUploadProps {
  onTextExtracted: (text: string) => void
}

export default function ResumeUpload({
  onTextExtracted,
}: ResumeUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [fileName, setFileName] = useState('')
  const [isExtracting, setIsExtracting] = useState(false)
  const [error, setError] = useState('')

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0]

    if (!file) return

    setError('')
    setFileName(file.name)
    setIsExtracting(true)

    try {
      const arrayBuffer = await file.arrayBuffer()

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise

      const pages: string[] = []

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber)
        const content = await page.getTextContent()

        const pageText = content.items
          .map((item) => ('str' in item ? item.str : ''))
          .join(' ')

        pages.push(pageText)
      }

      const extractedText = pages.join('\n\n').trim()

      if (!extractedText) {
        throw new Error(
          'No text could be extracted from this PDF.',
        )
      }

      onTextExtracted(extractedText)
    } catch (err) {
      console.error('PDF extraction failed:', err)

      setError(
        err instanceof Error
          ? err.message
          : 'Failed to extract text from PDF.',
      )

      onTextExtracted('')
    } finally {
      setIsExtracting(false)
    }
  }

  function openFilePicker() {
    inputRef.current?.click()
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={openFilePicker}
        disabled={isExtracting}
        className="rounded-2xl border border-primary/15 bg-background px-5 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isExtracting ? 'Extracting...' : 'Upload Resume'}
      </button>

      {fileName && !error && (
        <p className="mt-2 text-sm text-muted">
          {fileName}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}