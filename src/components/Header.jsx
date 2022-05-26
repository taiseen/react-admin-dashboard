// this <Component /> call from ==> 
// 1) 🟨 ../pages/Orders.js 🟨 <Component />
// 2) 🟨 ../pages/Customers.js 🟨 <Component />
// 3) 🟨 ../pages/Employees.js 🟨 <Component />

const Header = ({ category, title }) => (

  <div className="mb-10">

    <p className="text-lg text-gray-400">
      {category}
    </p>

    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>

  </div>
);

export default Header;