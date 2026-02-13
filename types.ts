import React from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  delay: string;
}

export interface EmergencyCalmResponse {
  message: string;
  action: string;
}