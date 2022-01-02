import React, { useCallback, useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  importWarning: boolean;
  onToggle: (toggled: boolean) => void;
  onImportAlbum: (url: string) => void;
};

const Import: React.FC<Props> = (props: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [url, setUrl] = useState("");

  const closeDialog = useCallback(
    (event) => {
      if (
        event.target.className === "import-container import-container--fade-in"
      ) {
        props.onToggle(false);
      }
    },
    [props]
  );
  const closeByEscapeKey = useCallback(
    (event) => {
      const escapeKeyNumber = 27;
      if (event.keyCode === escapeKeyNumber) {
        props.onToggle(false);
      }
    },
    [props]
  );
  useEffect(() => {
    if (props.isOpen) {
      window.addEventListener("keydown", closeByEscapeKey);
    }
    return () => {
      if (props.isOpen) {
        window.removeEventListener("keydown", closeByEscapeKey);
      }
    };
  }, [closeByEscapeKey, props.isOpen]);

  useEffect(() => {
    window.addEventListener("click", closeDialog);
    return () => {
      window.removeEventListener("click", closeDialog);
    };
  }, [closeDialog]);

  useEffect(() => {
    if (props.isOpen) {
      setIsShow(true);
    } else {
      setTimeout(() => {
        setIsShow(false);
      }, 500);
    }
  }, [props.isOpen]);

  function getDialogContainerClass() {
    const classList = ["import-container"];
    if (!props.isOpen) {
      classList.push("import-container--fade-out");
    }
    if (isShow) {
      classList.push("import-container--fade-in");
    }
    return classList.join(" ");
  }
  return (
    <>
      {isShow && (
        <div className={getDialogContainerClass()}>
          <div className="import">
            <div className="import-contents">
              <div className="input-row input-row--dialog">
                <label htmlFor="inputexample" className="input-label">
                  Imgur Album
                </label>
                <input
                  className="input"
                  id="inputexample"
                  type="text"
                  placeholder="https://imgur.com/a/XXXXXX"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                {props.importWarning && (
                  <span className="import-error">
                    <span className="material-icons">error</span>
                    <span>Please check you have a valid link</span>
                  </span>
                )}
              </div>
              <button
                className="button button--full-width"
                onClick={() => props.onImportAlbum(url)}
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Import;
