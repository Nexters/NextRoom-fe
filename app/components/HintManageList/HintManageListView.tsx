import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Hints } from "@/queries/getHintList";

interface Props {
  hints: Hints;
}

function HintManageListView(props: Props) {
  const { hints = [] } = props;

  return (
    <Stack spacing={3}>
      <Stack direction="column">
        {hints.map(
          ({ id, hintTitle, hintCode, contents, answer, progress }) => (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="inherit" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="inherit">{hintTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="inherit">{contents}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Stack>
    </Stack>
  );
}

export default HintManageListView;
