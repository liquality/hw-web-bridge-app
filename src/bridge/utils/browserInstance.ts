// Get extension api Chrome or Firefox
export const browserInstance: typeof chrome = (window.chrome || (window as any).browser)
