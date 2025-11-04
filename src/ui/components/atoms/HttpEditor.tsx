import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { http } from "@codemirror/legacy-modes/mode/http";
import { githubDark } from "@uiw/codemirror-theme-github";


export default function HttpEditor({ isReadOnly }: { isReadOnly: boolean }) {
   const [code, setCode] = useState(
      `GET /api/users/123 HTTP/1.1
Host: example.com
User-Agent: CustomClient/1.0
Accept: application/json
`
   );

   return (
      <div className="w-full rounded-md overflow-auto">
         <CodeMirror
            value={code}
            theme={githubDark}
            onChange={(value) => {
               setCode(value);
            }}
            readOnly={isReadOnly}
            editable={!isReadOnly}
            height="100"
            extensions={[StreamLanguage.define(http)]}

         />
      </div>
   );
}
