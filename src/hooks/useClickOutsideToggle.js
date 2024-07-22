import React, { useEffect, useState, useRef } from 'react'

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [ref])
  return { expanded, setExpanded, ref }
}

export default useClickOutsideToggle
