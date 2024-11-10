import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import './layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags html top-tags">
          &lt;html&gt;
          <br />
          <span className="tags top-tag-body top-tags">&lt;body&gt;</span>
        </span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
