export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    // Add a small delay to ensure the navigation has completed
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }
}
