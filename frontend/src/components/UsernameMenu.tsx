import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUserRound, Link } from "lucide-react";

const UsernameMenu = () => {
    const {user} = useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
            {user?.email}

        
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <Link to="/user-profile" className="font-bold hover:text-orange-500"></Link>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;