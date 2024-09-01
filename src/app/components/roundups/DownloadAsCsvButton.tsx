import { Button, Icon } from "semantic-ui-react";
import { Matches } from "../../types/RoundupTypes";
import { useState } from "react";

type DownloadAsCsvButtonProps = {
    matches: Matches;
    fileName: string;
}
export default function DownloadAsCsvButton({ matches, fileName }: DownloadAsCsvButtonProps) {
    const [downloading, setDownloading] = useState(false);

    function downloadCSV() {
        setDownloading(true);

        const headerRows = 'Giver,Reciever\n';
        const matchRows = Object.entries(matches)
            .map(([giver, reciever]) => `${giver},${reciever}`)
            .join('\n');

        const csvString = headerRows + matchRows;

        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const tempAnchor = document.createElement('a');

        tempAnchor.href = url;
        tempAnchor.download = `${fileName}.csv`;

        document.body.appendChild(tempAnchor);

        tempAnchor.click();

        document.body.removeChild(tempAnchor);
        URL.revokeObjectURL(url);

        setDownloading(false);
    }

    return (
        <Button icon labelPosition="left" primary size="small" onClick={downloadCSV} loading={downloading}>
            <Icon name="cloud download" />Download as CSV
        </Button>
    )
}