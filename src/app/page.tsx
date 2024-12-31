
export default function Home() {
  return (
    <div className="flex flex-col flex-wrap w-screen h-min">
      {/* Header */}
      <div className="flex flex-row w-screen h-min justify-between bg-gray-200 top-0">
        <div>Logo</div>
        <input
          type="text"
          placeholder="search"
          className="input input-bordered w-full max-w-xs" />
        <div className="flex flex-row space-x-4">          
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-outline m-1">Section 1</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-outline m-1">Section 2</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-outline m-1">Section 3</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row space-x-4 mr-4">
          <button className="btn btn-outline m-1">Login</button>
          <button className="btn btn-outline m-1">Sign Up</button>
        {/* Body */}
        </div>
      </div>
      <div className="flex flex-row w-screen h-screen">
          {/* Sidebar */}
        <div className="w-min bg-gray-100">
            <ul className="menu bg-base-200 w-40 p-0 [&_li>*]:rounded-none">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="flex w-screen bg-slate-400">content</div>
      </div>
      {/* Footer */}
      <div className="flex bottom-0">Footer</div>
    </div>
  );
}
