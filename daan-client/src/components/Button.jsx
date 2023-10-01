function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium font-[18px] text-primary outline-none rounded-[10px] ${styles}`}
      onClick={() => {
        window.location.href = `http://localhost:5173/#contact`;
      }}
    >
      Get Started
    </button>
  );
}

export default Button;
