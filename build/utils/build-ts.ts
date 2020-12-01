import ts from 'typescript';

export default function buildTS(source: string, options: ts.CompilerOptions) {
  const diagnostics: ts.DiagnosticRelatedInformation[] = [];
  const result = ts.transpile(source, options, undefined, diagnostics);
  return {
    result,
    diagnostics
  };
}
