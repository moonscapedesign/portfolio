import { NotionRenderer as ReactNotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';

// Core styles
import 'react-notion-x/src/styles.css';

// Optional components for enhanced blocks
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';

interface NotionRendererProps {
    recordMap: ExtendedRecordMap;
    fullPage?: boolean;
    darkMode?: boolean;
    className?: string;
}

export function NotionRenderer({ 
    recordMap, 
    fullPage = false, 
    darkMode = true,
    className = ''
}: NotionRendererProps) {
    return (
        <div className={`notion-renderer-wrapper ${className}`}>
            <ReactNotionRenderer
                recordMap={recordMap}
                fullPage={fullPage}
                darkMode={darkMode}
                components={{
                    Code,
                    Collection,
                    Equation,
                    Modal,
                }}
                disableHeader
            />
        </div>
    );
}
