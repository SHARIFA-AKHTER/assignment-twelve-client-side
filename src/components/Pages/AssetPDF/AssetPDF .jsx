
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    text: { fontSize: 12 },
});

const AssetPDF = ({ asset }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>{asset.assetName}</Text>
                <Text style={styles.text}>Status: {asset.status}</Text>
                <Text style={styles.text}>Type: {asset.assetType}</Text>
                <Text style={styles.text}>Details: {asset.details || 'N/A'}</Text>
            </View>
        </Page>
    </Document>
);

export default AssetPDF;