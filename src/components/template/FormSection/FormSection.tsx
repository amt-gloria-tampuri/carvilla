import Button from "../../atoms/Button/Button";
import LabelWithDropdown from "../../molecules/LabelWithDropdown/LabelWithDropdown";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const years = [
    {value:'Year', label:'Year'},
    { value: "2027", label: "2027" },
    { value: "2021", label: "2021" },
  ];
  const style=[
    {    value:"Style", label:"Style"},
    {    value:"Sedan", label:"Sedan"},
    {    value:"Van", label:"Van"},
    {    value:"Roadster", label:"Roadster"}
  ]

  const make=[
    {    value:"Make", label:"Make"},
    {    value:"Toyota", label:"Toyota"},
    {    value:"Holdings", label:"Holdings"},
    {    value:"Maecedes-Benz", label:"Maecedes-Benz"}
  ]

  const condition=[
    {    value:"Condition", label:"Condition"},
    {    value:"Something", label:"Sometthing"},
    {    value:"Something", label:"Something"},
    {    value:"Something", label:"Something"}
  ]

  const model=[
    {    value:"Model", label:"Model"},
    {    value:"Something", label:"Something"},
    {    value:"Something", label:"Something"},
    {    value:"Something", label:"Something"}
  ]

  const price=[
    {    value:"Price", label:"Price"},
    {    value:"$0.00", label:"$0.00"},
    {    value:"$0.00", label:"$0.00"},
    {    value:"$0.00", label:"$0.00"}
  ]

  

  const handleYearsChange = () => {};

  return (
    <div className={styles.formSection}>
      <form>
        <LabelWithDropdown
          label="Select Year"
          options={years}
          onChange={handleYearsChange}
          defaultValue="Year"
        />
        <LabelWithDropdown
          label="Body Style"
          options={style}
          onChange={handleYearsChange}
          defaultValue="Style"
        />
        <LabelWithDropdown
          label="Select Make"
          options={make}
          onChange={handleYearsChange}
          defaultValue="Make"
        />
        <LabelWithDropdown
          label="Car Condition"
          options={condition}
          onChange={handleYearsChange}
          defaultValue="Condition"
        />
         <LabelWithDropdown
          label="Select Model"
          options={model}
          onChange={handleYearsChange}
          defaultValue="Model"
        />
         <LabelWithDropdown
          label="Select Price"
          options={price}
          onChange={handleYearsChange}
          defaultValue="price"
        />
      </form>
      <Button>Search</Button>
    </div>
  );
};

export default FormSection;
