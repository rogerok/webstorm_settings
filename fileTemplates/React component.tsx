import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './${NAME}.module.scss';


interface ${NAME}Props {
  className?: string;
}

export const ${NAME} = memo((props: ${NAME}Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.${NAME}, {}, [className])}
    >
    t({`${NAME}`})
    </div>
  );
});
