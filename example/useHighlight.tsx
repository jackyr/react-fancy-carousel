import { useEffect } from "react"
import hljs from 'highlight.js'
import "highlight.js/styles/github-dark.css"

export default function useHighlight () {
  useEffect(() => {
    document.querySelectorAll('code').forEach(el => {
      try {
        hljs.highlightElement(el)
      } catch (e) {
        console.log(e)
      }
    })
  }, [])
}