// this <Component /> call from ==> 
// 1) 🟨 ../pages/Orders.js 🟨 <Component />
// 2) 🟨 ../pages/Kanban.js 🟨 <Component />
// 3) 🟨 ../pages/Editor.js 🟨 <Component />
// 4) 🟨 ../pages/Calendar.js 🟨 <Component />
// 5) 🟨 ../pages/Customers.js 🟨 <Component />
// 6) 🟨 ../pages/Employees.js 🟨 <Component />
// 7) 🟨 ../pages/ColorPicker.js 🟨 <Component />

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