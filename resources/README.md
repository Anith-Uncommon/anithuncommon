# AnithUncommon - Teaching Resources

This folder contains PDF and image resources for mentors.

## How to Add Resources

To add the PDF files mentioned in the code:

1. **Martina Marques**:

   * Upload file: `INT-Filo-y-Socio.pdf`
   * Original filename: "INT. Filo y Socio.pdf"
   * Path in code: `/resources/INT-Filo-y-Socio.pdf`
2. **Ishraq**:

   * Upload file: `A-married-state.pdf`
   * Original filename: "A married state.pdf"
   * Path in code: `/resources/A-married-state.pdf`
3. **Megan Lee**:

   * Two images are already integrated via figma:asset import
   * `megancardresource.jpeg` → Already imported as figma:asset
   * `meganpresentation1.jpeg` → Already imported as figma:asset

## File Naming Convention

* Use hyphens instead of spaces
* Keep original capitalization
* Example: "My Document.pdf" becomes "My-Document.pdf"

## Adding New Resources

When adding new mentor resources:

1. Upload the file to this `/public/resources/` folder
2. Update the mentor's data in `/src/app/data/mentors.ts`
3. Add the resource to the `resources` array with proper metadata

Example:

```typescript
{
  title: "Resource Title",
  type: "pdf", // or "image" or "document"
  description: "Brief description of what this resource covers",
  file: "/resources/filename.pdf", // Path relative to public folder
  relatedTopics: \\\["Topic 1", "Topic 2"] // Optional: topics where this appears
}
```

## Current Status

✅ Megan Lee - Images integrated (using figma:asset)
⏳ Martina Marques - PDF placeholder ready  
⏳ Ishraq - PDF placeholder ready

Once you upload the PDF files to this folder, they will automatically work in the application.

