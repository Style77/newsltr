import React from "react";
import { useCurrentEditor } from "@tiptap/react";

import { Button } from "@/components/ui/button";
import { ActionType, EditorButtonsType } from "./types";
import { Bold, Italic, Underline } from "lucide-react";

type FormattingType = Omit<EditorButtonsType, "actionFunction">;

const formattingData: FormattingType[] = [
  {
    name: "bold",
    action: "toggleBold",
    icon: <Bold strokeWidth={3} size={20} />,
  },
  {
    name: "italic",
    action: "toggleItalic",
    icon: <Italic strokeWidth={3} size={20} />,
  },
  {
    name: "underline",
    action: "toggleUnderline",
    icon: <Underline strokeWidth={3} size={20} />,
  },
];

const FormattingButtons = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const handleButtonClick = (action: ActionType) => {
    return editor.chain().focus()[action]().run();
  };

  const isActive = "bg-text text-white";

  return (
    <>
      {formattingData.map(({ name, action, icon }) => (
        <Button
          key={name}
          variant="icon"
          size="icon"
          onClick={() => handleButtonClick(action)}
          className={editor.isActive(name) ? isActive : ""}
        >
          {icon}
        </Button>
      ))}
    </>
  );
};

export default FormattingButtons;
