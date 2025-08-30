import React, { useEffect } from 'react'

function PlanioPage() {

  useEffect(() => {
    const spinnerElement = document.getElementById("spinner");
    if (spinnerElement) {
      setTimeout(() => {
        spinnerElement.style.opacity = "0";
      }, 1000);
    }
  }, [])

  return (
    <div>PlanioPage</div>
  )
}

export default PlanioPage