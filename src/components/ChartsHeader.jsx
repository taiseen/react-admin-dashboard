// this <Component /> call from ==> 
// 1) 🟨 ../pages/Charts/Bar.js 🟨 <Component />
// 2) 🟨 ../pages/Charts/Pai.js 🟨 <Component />
// 3) 🟨 ../pages/Charts/Line.js 🟨 <Component />
// 4) 🟨 ../pages/Charts/Area.js 🟨 <Component />
// 5) 🟨 ../pages/Charts/Pyramid.js 🟨 <Component />
// 6) 🟨 ../pages/Charts/Stacked.js 🟨 <Component />
// 7) 🟨 ../pages/Charts/Financial.js 🟨 <Component />
// 8) 🟨 ../pages/Charts/ColorMapping.js 🟨 <Component />

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">

    <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{category}</p>
    </div>

    <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>
);

export default ChartsHeader;