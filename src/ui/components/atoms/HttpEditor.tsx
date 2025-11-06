import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { http } from "@codemirror/legacy-modes/mode/http";
import { githubDarkInit } from "@uiw/codemirror-theme-github";




export default function HttpEditor({ isReadOnly, rawHttp, setRawHttp }: { isReadOnly: boolean, rawHttp: string | null, setRawHttp?: React.Dispatch<React.SetStateAction<string>> }) {

   return (
      <div className="w-full flex h-full size-full overflow-auto">
         <CodeMirror
            value={rawHttp ?? ""}
            theme={githubDarkInit({
               settings: {
                  gutterBackground: '#161b2206',
                  background: '#161B22',
                  caret: '#22c55e'
               }
            })}
            onChange={(value) => {
               setRawHttp?.(value);
            }}
            readOnly={isReadOnly}
            editable={!isReadOnly}
            height="100%"
            extensions={[StreamLanguage.define(http)]}
            className="text-xs w-full"
         />
      </div>
   );
}
