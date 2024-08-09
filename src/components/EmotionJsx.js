/** @jsxImportSource @emotion/react */
import { css } from '@emotion/rect';

export default function EmotionJsx() {
    const styles = css`
        width: 300px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        background-color: royalblue;
        color: white;
    `;

    return (
        <div css={style}><b>Styled JSX</b>は、JSX式にスタイル定義を...</div>
    );
}