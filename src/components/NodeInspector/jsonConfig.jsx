import React from "react";
import PropTypes from "prop-types";
import { CiWarning } from "react-icons/ci";

const JsonConfig = ({ config }) => {
  return (
   <div>
        <div className="text-center p-2">JSON Configuration</div>
        <legend className="text-xs  p-2">
            <CiWarning className="inline-block mr-1" />This is the custom JSON configuration you want for the selected node. Please validate the configuration before pasting it.
        </legend>
        <div className="">
            <textarea cols={50} rows={20} className="w-full p-2 border rounded text-xs" placeholder={JSON.stringify(config, null, 2)}>
            </textarea>
        </div>
   </div>
  );
};

export default JsonConfig;
JsonConfig.propTypes = {
  config: PropTypes.object.isRequired,
};