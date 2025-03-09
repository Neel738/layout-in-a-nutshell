export default function ThemeScript() {
  // This script will run before React hydration
  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Remove any existing 'dark' class to ensure consistent initial render
            document.documentElement.classList.remove('dark');
            
            // Apply theme only after hydration is complete
            window.addEventListener('load', function() {
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            });
          })();
        `,
      }}
    />
  );
}
