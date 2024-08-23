import Header from "@/layout/header"
import KuraLayout from "@/layout/KuraLayout"
import MobileMenu from "@/layout/mobileMenu"

export default ({ children }: { children: React.ReactNode}) => {
  return (
    <KuraLayout>
      <MobileMenu />
      <Header showMenu={false} />
      {children}
    </KuraLayout>
  )
}