import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import logo from "@/assets/images/logo-white.png"
import { FaHome } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi"
import { FaMicroblog } from "react-icons/fa"
import { FaCommentDots } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { TbCircleDottedLetterC } from "react-icons/tb";
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} alt="logo" width={120} />
      </SidebarHeader>
        <SidebarContent className="bg-white">
            <SidebarGroup>
                <SidebarMenu> 
                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                          <FaHome />
                          <Link to="">Home</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                        <BiSolidCategory />
                          <Link to="">Categories</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                          <FaMicroblog />
                          <Link to="">Blogs</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                          <FaCommentDots />
                          <Link to="">Comments</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                          <FaUserSecret />
                          <Link to="">Users</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
        
                </SidebarMenu>
            </SidebarGroup>
            {/* ------------- */}

            <SidebarGroup>
              <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarMenu> 
                    <SidebarMenuItem> 
                        <SidebarMenuButton>
                          <TbCircleDottedLetterC />
                          <Link to="">Categoty Items</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

        </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar