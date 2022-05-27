

// this <Component /> call from ==> 
// 🟨 ../pages/Ecommerce.js 🟨 <Component />
const Button = ({ color, bgColor, text, size, borderRadius }) => {

  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button