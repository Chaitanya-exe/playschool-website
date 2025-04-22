import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({ ques, ans }) {
  return (
    <div className="max-w-6xl mx-auto">
      <Accordion
        className="rounded-md shadow-md border-p_yellow border-b-4 border-r-4"
        sx={{ color: "#0EA5E9", borderRadius: 5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="transition-colors"
          sx={{
            backgroundColor: "#87CEFA",
            color: "#FFFFFF",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#B8E986",
            },
          }}
        >
          <span className="sub-heading font-semibold tracking-wide">
            {ques}{" "}
          </span>
        </AccordionSummary>

        <p className="p-4 para text-light_text">{ans}</p>
      </Accordion>
    </div>
  );
}
