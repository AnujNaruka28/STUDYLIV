import React from 'react'

const HighLightedText:React.FC<{text: string|null}> = ({text}: {text: string|null}) => {
  return (
    <span className="bg-gradient-to-b from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb] text-transparent bg-clip-text">
        {text}
    </span>
  )
}

export default HighLightedText;