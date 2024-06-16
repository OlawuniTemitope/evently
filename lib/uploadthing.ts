import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import type { OurFileRouter } from "@/app/(auth)/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";
   
  export const {useUploadThing, uploadFiles} = 
  generateReactHelpers<OurFileRouter>();
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();