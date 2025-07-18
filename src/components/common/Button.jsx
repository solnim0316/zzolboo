const CTAButton = ({ label }) => {
  return (
    <button className="bg-primary hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition">
      {label}
    </button>
  );
};

export default CTAButton;
