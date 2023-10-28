import Typewriter from 'typewriter-effect'

export default function Type () {

  return (
    <Typewriter
    options={{
      strings: [
        'Softeware Developer',
        'React and Next.js',
        'Firestore & Firebase',
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
    />
  )
}