# 🧾 React + TypeScript Event Types Cheat Sheet

## 📄 General Format

```ts
(event: React.EventType<HTMLElement>) => void
```

---

## 🔤 Form Elements

| **Event**  | **Type**                                 | **Typical Element**         |
| ---------- | ---------------------------------------- | --------------------------- |
| `onChange` | `React.ChangeEvent<HTMLInputElement>`    | `<input type="text" />`     |
|            | `React.ChangeEvent<HTMLTextAreaElement>` | `<textarea />`              |
|            | `React.ChangeEvent<HTMLSelectElement>`   | `<select />`                |
| `onInput`  | `React.FormEvent<HTMLInputElement>`      | `<input />`, `<textarea />` |
| `onSubmit` | `React.FormEvent<HTMLFormElement>`       | `<form />`                  |
| `onReset`  | `React.FormEvent<HTMLFormElement>`       | `<form />`                  |

---

## 🖱️ Mouse Events

| **Event**       | **Type**                        |
| --------------- | ------------------------------- |
| `onClick`       | `React.MouseEvent<HTMLElement>` |
| `onDoubleClick` | `React.MouseEvent<HTMLElement>` |
| `onMouseEnter`  | `React.MouseEvent<HTMLElement>` |
| `onMouseLeave`  | `React.MouseEvent<HTMLElement>` |
| `onMouseDown`   | `React.MouseEvent<HTMLElement>` |
| `onMouseUp`     | `React.MouseEvent<HTMLElement>` |

---

## ⌨️ Keyboard Events

| **Event**    | **Type**                           |
| ------------ | ---------------------------------- |
| `onKeyDown`  | `React.KeyboardEvent<HTMLElement>` |
| `onKeyUp`    | `React.KeyboardEvent<HTMLElement>` |
| `onKeyPress` | `React.KeyboardEvent<HTMLElement>` |

---

## 📦 Clipboard Events

| **Event** | **Type**                            |
| --------- | ----------------------------------- |
| `onCopy`  | `React.ClipboardEvent<HTMLElement>` |
| `onCut`   | `React.ClipboardEvent<HTMLElement>` |
| `onPaste` | `React.ClipboardEvent<HTMLElement>` |

---

## 🖱️ Focus Events

| **Event** | **Type**                        |
| --------- | ------------------------------- |
| `onFocus` | `React.FocusEvent<HTMLElement>` |
| `onBlur`  | `React.FocusEvent<HTMLElement>` |

---

## 🧪 Example Usage

```tsx
function Example() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
  };

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
```
