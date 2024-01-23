const LabelForm = ({ For, text }) => {
   return (
      // mt-3
      <label htmlFor={For} className="text-base font-bold md:text-xl">
         {text}
      </label>
   );
};

export default LabelForm;
