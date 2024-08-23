import Header from "@/layout/header"
import KuraLayout from "@/layout/KuraLayout"
import MobileMenu from "@/layout/mobileMenu"

const PostLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <KuraLayout>
      <MobileMenu showMenu={false} />
      <Header showMenu={false} />
      {children}
    </KuraLayout>
  )
}

export default PostLayout