import './App.css'
import { Button } from './Button'
import { Grid } from './Grid'

// Data for the buttons
const keyboardLayout = [
  // Row 1
  [
    { icon1: 'Q' },
    { icon1: 'W' },
    { icon1: 'E' },
    { icon1: 'R' },
    { icon1: 'T' },
    { icon1: 'Y' },
  ],
  // Row 2
  [
    { icon1: 'A' },
    { icon1: 'S' },
    { icon1: 'D', bottomBorder: true },
    { icon1: 'F' },
    { icon1: 'G' },
    { icon1: 'H', width: 8 },
  ],
  // Row 3
  [
    { icon1: 'Z' },
    { icon1: 'X' },
    { icon1: 'C' },
    { icon1: 'V' },
    { icon1: 'B' },
    { icon1: '<', icon2: '⌫', width: 6 },
  ]
];


function App() {
  return (
    <>
      <div className="relative flex justify-center items-center mt-0.5 w-screen h-screen align">
        <div className='relative w-fit flex flex-col justify-items-center h-fit bg-zinc-800 p-2 rounded-2xl'>
          {keyboardLayout.map((row, rowIndex) => (
            <Grid key={rowIndex}>
              {row.map((buttonProps, buttonIndex) => (
                <Button key={buttonIndex} {...buttonProps} />
              ))}
            </Grid>
          ))}
        </div>
      </div >
    </>
  )
}

export default App