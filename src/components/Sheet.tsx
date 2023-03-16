import React, { useState } from 'react';

interface Props {
  song: { 
    title: string, 
    artist: string, 
    lyrics: { c: string | null, w: string }[][] 
  };
}


enum DisplayType {
  INLINE,
  ABOVE
}

const Sheet: React.FC<Props> = ({ song }) => {
  const [type, setType] = useState(DisplayType.ABOVE);

  const lines = () => {
    switch (type) {
      case DisplayType.INLINE: {
        return song?.lyrics?.map((line) => {
          return (
            <div className='line'>
              {line?.map((l) => (
                <>
                  <div><span className="chord">{l?.c}</span> {l?.w}</div>
                  <span>&nbsp;</span>
                </>
              ))}
            </div>
          )
        })
      }
      default: {
        return song?.lyrics?.map((line) => {
          return (
            <div className='line'>
              {line?.map((l) => (
                <>
                  <div>
                    <div className="chord">{l?.c}</div>
                    <div>{l?.w}</div>
                  </div>
                  <span>&nbsp;</span>
                </>
              ))}
            </div>
          )
        })
      }
    }
  }

  return (
    <div>

      <div className='song-meta'>
        <small>{song?.artist}</small>
        <h1 className='song-title'>{song?.title}</h1>

        <select name="displayType" value={type} onChange={(e) => setType(parseInt(e.target.value))}>
          <option value={DisplayType.ABOVE}>Above</option>
          <option value={DisplayType.INLINE}>Inline</option>
        </select>
      </div>

      <div>
        {lines()}
      </div>
    </div>
  )
}

export default Sheet;