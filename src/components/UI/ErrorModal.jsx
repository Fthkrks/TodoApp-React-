import React from 'react'
import Card from './Card'
import Button from './button'

const ErrorModal = ({seterror}) => {
  return (
<div className="error-modal">
<Card className="w-[36rem] p-0 fixed z-10">
    <header className='bg-red-600 text-white p-2 text-center'>
        <h3>İnputu doldur!</h3>
    </header>
    <section className='p-6'>
        <span>hiçbir şey yazmadın birşey yazdığında aşağı kaydedilir!</span>
    </section>
    <footer className='text-end p-2 mr-1'>
    <Button className ="bg-red-600 text-right p-2" onClick ={() => seterror(false)}>Tamam</Button>
    </footer>

    </Card>
<div className='backdrop-blur-lg bg-white/20 fixed inset-0 w-screen h-screen' ></div>
</div>
  )
}

export default ErrorModal