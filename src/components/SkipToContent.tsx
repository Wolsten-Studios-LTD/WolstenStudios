export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-content"
      style={{
        position: 'absolute',
        top: '-100px',
        left: '0',
        zIndex: 9999,
        padding: '1rem 1.5rem',
        backgroundColor: '#00A5C7',
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        transition: 'top 0.2s',
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '0';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-100px';
      }}
    >
      Skip to main content
    </a>
  );
}
