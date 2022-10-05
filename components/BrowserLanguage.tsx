import Multiselect from 'multiselect-react-dropdown';
import useLanguages from '../hooks/useLanguages';
import MultiInputCross from '../assets/images/multiinputcross.svg';
const BrowserLanguage = () => {
  const { allLanguages, handleMulti, handleSingle } = useLanguages();

  return (
    <>
      <Multiselect
        singleSelect={true}
        style={{
          chips: {
            background: 'white',
            borderRadius: '6px',
            color: 'rgba(0, 0, 0, 1)',
            marginLeft: '5px',
            padding: '0.5px',
            fontFamily: 'Poppins',
            fontSize: '14px',
          },
          multiselectContainer: {
            border: 'rgba(234, 15, 15, 1)',
            width: '100%',
            height: '36px',
            margin: 0,
            padding: 0,
          },
          searchBox: {
            border: '1px solid rgba(221, 221, 221, 1)',
          },
        }}
        className="block py-2 px-3 h-9"
        options={allLanguages}
        isObject={false}
        onRemove={handleSingle}
        onSearch={function noRefCheck() {}}
        onSelect={handleSingle}
      />

      <Multiselect
        customCloseIcon={
          <span className="bg-red-500 ml-3 cursor-pointer rounded-full h-4 w-4 flex items-center justify-center ">
            <MultiInputCross />
          </span>
        }
        style={{
          chips: {
            background: 'white',
            borderRadius: '6px',
            color: 'rgba(0, 0, 0, 1)',
            border: '1px solid #EA0F0F',
            marginLeft: '5px',
            paddingInline: '10px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            width: 'max-content',
            height: '30px',
            display: 'inline-flex',
            alignItems: 'center',
          },
          multiselectContainer: {
            border: 'rgba(234, 15, 15, 1)',
            width: '100%',
            height : "max-content",
            margin: 0,
            padding: 0,
          },
          searchBox: {
            border: '1px solid rgba(221, 221, 221, 1)',
          },
        }}

        options={allLanguages}
        isObject={false}
        onRemove={handleMulti}
        onSearch={function noRefCheck() {}}
        onSelect={handleMulti}
      />
    </>
  );
};

export default BrowserLanguage;
