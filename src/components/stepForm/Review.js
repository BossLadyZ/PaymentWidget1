import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core'
import React from 'react'

export const Review = () => {
    return (
        <Container maxwidth="sm">
            <h1>Review</h1>
            <RenderAccordion summary="eligibility" />
        </Container>
    )
};

export const RenderAccordion = ({ summary }) => (
<Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
<AccordionDetails></AccordionDetails>
</Accordion>
)
