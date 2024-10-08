import './Footer.css'
const Footer = () => {
  const iconColor = "white";
  const iconWidth = '32';
  const iconHeight = '32';
  const strokeWidth = '2';
  return <div className='redesFooter'>
    <p className='titleFooter'>Siguenos</p>
    <div className='iconsFooter'> 
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconWidth}  height={iconHeight}  viewBox="0 0 24 24"  fill="none"  stroke={iconColor}  strokeWidth={strokeWidth}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>      
      </a>
      <a href="http://x.com" target="_blank" rel="noopener noreferrer">
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconWidth}  height={iconHeight}  viewBox="0 0 24 24"  fill="none"  stroke={iconColor}  strokeWidth={strokeWidth}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>      
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconWidth}  height={iconHeight}  viewBox="0 0 24 24"  fill="none"  stroke={iconColor}  strokeWidth={strokeWidth}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>      
      </a>
      <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconWidth}  height={iconHeight}  viewBox="0 0 24 24"  fill="none"  stroke={iconColor}  strokeWidth={strokeWidth}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>      
      </a>
    </div>
  </div>
}
export default Footer