import './App.css'
import { Button } from './Button'
import { Grid } from './Grid'

const keyboardLayout = [
  [
    { icon1: '`', icon2: '~' },
    { icon1: '!', icon2: '1' },
    { icon1: '@', icon2: '2' },
    { icon1: '#', icon2: '3' },
    { icon1: '$', icon2: '4' },
    { icon1: '%', icon2: '5' },
    { icon1: '^', icon2: '6' },
    { icon1: '&', icon2: '7' },
    { icon1: '*', icon2: '8' },
    { icon1: '(', icon2: '9' },
    { icon1: ')', icon2: '0' },
    { icon1: '-', icon2: '_' },
    { icon1: '=', icon2: '+' },
  ],
  [
    { icon1: 'Q' },
    { icon1: 'W' },
    { icon1: 'E' },
    { icon1: 'R' },
    { icon1: 'T' },
    { icon1: 'Y' },
    { icon1: 'U' },
    { icon1: 'I' },
    { icon1: 'O' },
    { icon1: 'P' },
    { icon1: '[', icon2: '{' },
    { icon1: ']', icon2: '}' },
    { icon1: '\\', icon2: '|' },
  ],
  [
    { icon1: 'A' },
    { icon1: 'S' },
    { icon1: 'D' },
    { icon1: 'F' },
    { icon1: 'G' },
    { icon1: 'H' },
    { icon1: 'J' },
    { icon1: 'K' },
    { icon1: 'L' },
    { icon1: ';', icon2: ':' },
    { icon1: "'", icon2: '"' },
  ],
  [
    { icon1: 'Z' },
    { icon1: 'X' },
    { icon1: 'C' },
    { icon1: 'V' },
    { icon1: 'B' },
    { icon1: 'N' },
    { icon1: 'M' },
    { icon1: ',', icon2: '<' },
    { icon1: '.', icon2: '>' },
    { icon1: '/', icon2: '?' },
    { icon1: "Shift", icon2: "↑", width: 8 }
  ],
  [
    { icon1: 'Space', width: 35, bottomBorder: true },
    { icon1: 'Enter', width: 8 },
  ]
];


function App() {
  return (
    <>
      <div className="relative flex justify-center items-center mt-0.5 w-screen h-screen bg-gradient-to-b from-blue-100 to-blue-300 align">
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