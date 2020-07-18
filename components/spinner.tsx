import React, { FunctionComponent } from 'react'

interface Props {
  className?: string
  light?: boolean
}

export const Spinner: FunctionComponent<Props> = ({
  className,
  light = false
}) => (
  <>
    <div className={`spinner ${light ? 'light' : 'dark'} ${className}`}></div>
    <style jsx>{`
      .spinner {
        height: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        width: 1.5rem;
      }

      .spinner:before {
        animation: spinner 0.6s infinite linear;
        border-radius: 100%;
        border: 2px solid transparent;
        content: '';
        display: block;
        height: 100%;
        margin: auto;
        width: 100%;
      }

      .spinner.light:before {
        border-top-color: #fff;
      }

      .spinner.dark:before {
        border-top-color: #e80c30;
      }

      @keyframes spinner {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>
)
