// jest-fetch-mock.d.ts
declare global {
    namespace NodeJS {
       interface Global {
         fetch: typeof fetch;
       }
    }
   }
   
   export {};
   