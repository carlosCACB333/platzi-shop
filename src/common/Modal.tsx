import { FC, PropsWithChildren, ReactNode, useContext, useState } from 'react';

interface Props extends PropsWithChildren {
  title?: string;
  footer?: ReactNode;
  ButtonOpen?: FC<{ onClick: () => void }>;
  handleClick?: () => Promise<boolean>;
  width?: 'max-w-xl' | 'max-w-2xl' | 'max-w-4xl';
}
export const Modal: FC<Props> = ({ children, title, footer, ButtonOpen, handleClick, width = 'max-w-xl' }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <>
      {ButtonOpen ? (
        <ButtonOpen onClick={handleToggle} />
      ) : (
        <button
          type="button"
          className="inline-flex items-center px-4 py-2  rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={handleToggle}
        >
          {title}
        </button>
      )}
      {open && (
        <div
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed  z-30 w-full inset-0 h-modal h-full flex items-center justify-center bg-gray-900/90"
        >
          <div className={width + ' relative p-4 w-full h-full h-auto'}>
            {/* Modal content */}
            <div className="relative rounded-lg shadow dark:bg-gray-800">
              {/* Modal header */}
              <div className="flex justify-between items-start p-4 rounded-t  bg-indigo-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <button
                  type="button"
                  className="text-gray-100 bg-transparent  hover:text-gray-300 rounded-lg inline-flex items-center "
                  onClick={handleToggle}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <div className="py-6 px-8 space-y-6 text-gray-200">{children}</div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600">
                {footer || (
                  <>
                    <button
                      type="button"
                      className="text-gray-200  hover:bg-gray-600 rounded-lg  text-sm font-medium px-5 py-2.5 bg-gray-700"
                      onClick={handleToggle}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="text-white bg-indigo-700 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center "
                      onClick={async () => {
                        const result = await handleClick?.();
                        result && handleToggle();
                      }}
                    >
                      Aceptar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
