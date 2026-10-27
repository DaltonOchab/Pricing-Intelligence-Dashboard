# Data validation

Validated October 27, 2026 against the supplied Mission 1 files.

- 154 explicit workbook/report field comparisons passed. All seven workbook pricing records agree with JSON on pack price, quantity, normalized values, model, group, availability, verification, representative flag and source.
- All seven Word report pricing rows agree on offer ID, pack price, quantity and rounded unit price.
- Venture Overview, Competitor Overview, Pricing Comparison, and Sources & Limitations were read alongside Detailed Pricing. The report’s preliminary $15–$20 per ball / $45–$60 three-ball range agrees with JSON.
- 3 unique competitors, 7 product/quantity pricing records, 3 representative products. No standalone add-ons or mixed currencies.
- Conventional representative USD/dozen: minimum 26.99; maximum 34.99; mean and median 30.99. Smart representative: 399.90, one brand only. No pooled mean.
- All seven official listed prices are Verified; supporting retailer S07 is Partially Verified for quantity corroboration. Inventory and fulfillment were not confirmed.
- No substantive numerical conflicts. JSON regular_price fields on P06/P07 are clarified by the source notes: compare-at values, not established historical regular prices. UI explicitly labels this.
- Mission 1’s obsolete Desktop-access delivery note is preserved in the raw JSON and contextualized in the UI. The original PDF’s 39-versus-38 observation discrepancy remains a disclosed source limitation; it is unrelated to the seven imported pricing offers.
- All 8 source URLs and all offer URLs use HTTPS. Live source content was not re-researched; this preserves the dated evidence snapshot.
