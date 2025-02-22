import React from 'react'

export default function Footer() {
  return (
    <div className=' '>
      <div className='justify-center text-center border-b-2 pb-5'>
      <h2 className='font-bold text-3xl pb-2'>Gadget Heaven</h2>
      <p>Leading the way in cuttting-edge technology and innovation</p>
      </div>
        <footer className="footer  text-base-content p-10 justify-center text-center gap-60">
      
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}
